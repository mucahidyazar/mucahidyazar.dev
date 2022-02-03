import produce from 'immer'

// import {Status} from '@/constants'

import * as types from './types'

const INITIAL_STATE = {
  user: null,
  expires: null,
}

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case types.SAVE_AUTH:
      draft.user = action.data?.user
      draft.expires = action.data?.expires
      break
    default:
      break
  }
}, INITIAL_STATE)
