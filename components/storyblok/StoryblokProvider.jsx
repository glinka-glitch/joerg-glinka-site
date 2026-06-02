"use client"

import {
  storyblokInit,
  apiPlugin,
} from "@storyblok/react"

storyblokInit({
  accessToken:
    process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,

  use: [apiPlugin],

  components: {},
})

export default function StoryblokProvider({
  children,
}) {
  return children
}