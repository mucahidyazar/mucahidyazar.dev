import {createSelector} from 'reselect'

import {State} from '@/types'

const selectContact = (state: State) => state.contact

export const makeSelectMessages = createSelector(
  selectContact,
  ({messages}) => messages.data,
)

export const makeSelectMessagesStatus = createSelector(
  selectContact,
  ({messages}) => messages.status,
)

export const makeSelectBoard = createSelector(
  selectContact,
  ({board}) => board.data,
)

export const makeSelectBoardStatus = createSelector(
  selectContact,
  ({board}) => board.status,
)

export const makeSelectEmailStatus = createSelector(
  selectContact,
  ({email}) => email?.status,
)
