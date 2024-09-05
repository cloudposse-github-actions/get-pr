import {PRSimple} from '../src/types/pull-request'

interface Options {
  sha?: string
  draft?: boolean
}

export default function createDummyPR(id: number, options: Options): PRSimple {
  return Object.assign({} as PRSimple, {
    id,
    draft: options.draft || false,
    head: {
      sha: options.sha || ''
    }
  })
}
