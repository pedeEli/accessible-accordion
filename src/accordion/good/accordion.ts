import type {Action} from '@sveltejs/kit'
import {error, redirect} from '@sveltejs/kit'

export const accordion: Action = async ({request, url}) => {
  const data = await request.formData()
  const toggle = data.get('toggle')
  if (!toggle) {
    throw error(400)
  }
  const newUrl = new URL(url)

  if (newUrl.searchParams.has(toggle.toString())) {
    newUrl.searchParams.delete(toggle.toString())
  } else {
    newUrl.searchParams.set(toggle.toString(), '')
  }

  throw redirect(301, newUrl.href)
}