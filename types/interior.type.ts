/* ----------------------------- InteriorProject ---------------------------- */
export type InteriorProject = {
  _id: string
  title: {
    ar: string
    en: string
  }
  description: {
    ar: string
    en: string
  }
  style: string
  images: string[]
  client: {
    _id: string,
    fullName: string
  }
  country: string
  state: string
  city?: string
}

/* --------------------------- oneInteriorProject --------------------------- */
export type oneInteriorProject = {
  _id: string,
  title: {
    ar: string,
    en: string
  },
  description: {
    ar: string,
    en: string
  },
  style: string,
  images: string[],

  country: string,
  state: string,
  city: string,
  client: {
    _id: string,
    fullName: string,
    country: string,
    job: string
  },
}