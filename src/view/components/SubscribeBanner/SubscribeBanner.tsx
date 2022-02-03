import React from 'react'
import Image from 'next/image'
import type {NextComponentType} from 'next'
import {useSelector} from 'react-redux'

import {makeSelectUser} from '@/store/auth'

import * as S from './style'

const SubscribeBanner: NextComponentType = () => {
  const user = useSelector(makeSelectUser)

  const submitHandler = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const body = JSON.stringify({
      email: form.get('email'),
      name: form.get('name'),
    })

    fetch('/api/newsletter', {
      method: 'POST',
      body,
    })
  }

  return (
    <S.SubscribeBannerContainer>
      <S.SubscribeBannerLeft>
        <S.SubscribeBannerTopTitle level={6}>
          BOOST YOUR FRONTEND CAREER
        </S.SubscribeBannerTopTitle>
        <S.SubscribeBannerBottomTitle level={6}>
          THE FRONTEND DEVELOPER
        </S.SubscribeBannerBottomTitle>
      </S.SubscribeBannerLeft>

      <S.SubscribeBannerForm onSubmit={submitHandler}>
        {!user?.name && (
          <S.SubscribeBannerInput name="name" placeholder="Name" />
        )}
        {!user?.email && (
          <S.SubscribeBannerInput name="email" placeholder="Email" />
        )}
        {!user?.newsletter && (
          <S.SubscribeBannerButton>
            <S.SubscribeBannerButtonText>Subscribe</S.SubscribeBannerButtonText>
            <Image
              src="/svgs/mail-icon.svg"
              alt="mail-icon"
              width={24}
              height={24}
            />
          </S.SubscribeBannerButton>
        )}
      </S.SubscribeBannerForm>
    </S.SubscribeBannerContainer>
  )
}

SubscribeBanner.propTypes = {}

SubscribeBanner.defaultProps = {}

export default SubscribeBanner
