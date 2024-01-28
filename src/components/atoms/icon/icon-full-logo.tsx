import {IconProps} from './common'

export default function IconFullLogo({
  fill,
  fillOne,
  fillTwo,
  width: _width,
  height: _height,
  ...props
}: IconProps) {
  return (
    <svg {...props} viewBox="0 0 59 11" fill="none">
      <path
        fill={fillOne || fill}
        d="M7.1 6.316c-.128.008-.284.092-.468.252a5.278 5.278 0 0 0-.6.6c-.208.24-.428.508-.66.804a63.552 63.552 0 0 0-1.248 1.704c-.184.256-.34.46-.468.612a1.288 1.288 0 0 1-.456-.312 1.283 1.283 0 0 1-.276-.528c.04-.248.096-.504.168-.768.072-.272.164-.552.276-.84.12-.288.264-.588.432-.9.176-.32.388-.656.636-1.008-.12.008-.284.096-.492.264-.208.16-.432.372-.672.636-.24.256-.488.548-.744.876-.256.32-.496.636-.72.948-.296.416-.544.78-.744 1.092-.192.312-.332.496-.42.552-.208-.152-.352-.316-.432-.492a2.53 2.53 0 0 1-.18-.588c.008-.192.036-.432.084-.72.056-.288.132-.584.228-.888.184-.584.42-1.164.708-1.74.296-.576.58-1.104.852-1.584.224.048.424.124.6.228.184.104.376.256.576.456-.08.248-.204.512-.372.792-.168.272-.344.56-.528.864a10.54 10.54 0 0 0-.504.936c-.152.32-.252.644-.3.972.224-.32.488-.688.792-1.104.312-.416.628-.808.948-1.176.328-.368.652-.68.972-.936.32-.256.608-.384.864-.384.096 0 .2.016.312.048a1.805 1.805 0 0 1 .552.264c.064.04.1.072.108.096-.04.16-.136.38-.288.66-.144.272-.3.56-.468.864-.168.304-.324.6-.468.888-.144.28-.228.504-.252.672.392-.536.76-1.02 1.104-1.452.344-.44.668-.816.972-1.128.304-.312.584-.552.84-.72.264-.168.512-.252.744-.252.16 0 .308.044.444.132.144.08.244.2.3.36-.072.24-.192.528-.36.864-.16.336-.324.692-.492 1.068-.168.368-.32.732-.456 1.092-.128.36-.192.684-.192.972 0 .168.024.28.072.336.048.048.116.072.204.072a.705.705 0 0 0 .264-.048.544.544 0 0 1 .192-.06.178.178 0 0 1 .084.12.808.808 0 0 1 .012.132c-.16.128-.324.232-.492.312a1.197 1.197 0 0 1-.564.132c-.192 0-.352-.032-.48-.096a.864.864 0 0 1-.3-.264 1.041 1.041 0 0 1-.168-.384 2.156 2.156 0 0 1-.048-.468c0-.272.036-.54.108-.804.072-.272.156-.528.252-.768.104-.248.212-.476.324-.684.112-.216.208-.408.288-.576Zm5.504 3.42a.969.969 0 0 1-.312-.48 2.082 2.082 0 0 1-.072-.492c0-.168.02-.312.06-.432-.032 0-.104.064-.216.192s-.236.28-.372.456a28.873 28.873 0 0 1-.672.888c-.104.112-.204.2-.3.264a.535.535 0 0 1-.216.108 1.613 1.613 0 0 1-.408-.084c-.136-.04-.268-.1-.396-.18a1.579 1.579 0 0 1-.324-.288.945.945 0 0 1-.18-.384c0-.224.004-.408.012-.552.016-.144.044-.3.084-.468.072-.304.176-.648.312-1.032.144-.384.308-.76.492-1.128a7.78 7.78 0 0 1 .612-1.044c.232-.328.476-.584.732-.768.072 0 .156.008.252.024.096.008.192.028.288.06.104.032.2.072.288.12a.65.65 0 0 1 .24.168c-.072.08-.256.348-.552.804-.288.456-.612 1.112-.972 1.968-.04.088-.088.216-.144.384-.056.168-.112.344-.168.528a7.771 7.771 0 0 0-.144.54 2.482 2.482 0 0 0-.048.42c0 .064.008.112.024.144a.702.702 0 0 0 .06.072c.12-.048.272-.18.456-.396.184-.216.44-.548.768-.996l.276-.384c.112-.144.224-.296.336-.456a6.8 6.8 0 0 0 .312-.516c.104-.176.188-.352.252-.528.032-.096.072-.208.12-.336.056-.136.12-.276.192-.42a6.26 6.26 0 0 1 .264-.432c.104-.152.224-.292.36-.42a2.06 2.06 0 0 1 .672.132 1.2 1.2 0 0 1 .288.12c.08.04.14.084.18.132-.144.352-.304.7-.48 1.044-.176.344-.34.684-.492 1.02-.152.328-.28.656-.384.984a3.167 3.167 0 0 0-.156.96c0 .168.012.316.036.444.032.12.064.224.096.312l.084.204a.304.304 0 0 1 .048.144c0 .008-.008.02-.024.036-.008.008-.016.012-.024.012a.859.859 0 0 1-.216-.036 2.335 2.335 0 0 1-.3-.108 3.684 3.684 0 0 1-.324-.144 3.72 3.72 0 0 1-.3-.18Zm2.679-1.848c0-.456.092-.896.276-1.32.192-.432.44-.812.744-1.14a3.777 3.777 0 0 1 1.056-.804c.4-.208.812-.312 1.236-.312.416 0 .736.104.96.312.224.208.336.504.336.888 0 .184-.028.364-.084.54-.048.168-.116.32-.204.456-.08.136-.176.248-.288.336a.576.576 0 0 1-.336.12.633.633 0 0 1-.3-.084.857.857 0 0 1-.24-.24c.536-.488.804-.932.804-1.332 0-.232-.092-.348-.276-.348-.16 0-.36.076-.6.228-.24.152-.472.352-.696.6a4.194 4.194 0 0 0-.792 1.284 4.093 4.093 0 0 0-.264 1.464c0 .648.144 1.036.432 1.164.12-.016.26-.052.42-.108.16-.056.332-.128.516-.216a8.38 8.38 0 0 0 .564-.324c.2-.12.392-.248.576-.384.032.024.06.06.084.108a.299.299 0 0 1 .036.132 4.46 4.46 0 0 1-.468.492c-.176.16-.36.308-.552.444-.192.128-.38.236-.564.324a1.582 1.582 0 0 1-.468.18 1.683 1.683 0 0 1-.744-.252 2.174 2.174 0 0 1-.612-.54 2.928 2.928 0 0 1-.408-.768 2.827 2.827 0 0 1-.144-.9Zm9.107-2.736c.08 0 .172.016.276.048.112.024.212.06.3.108.088.04.16.084.216.132.064.048.096.092.096.132a16.375 16.375 0 0 0-.792 1.992 9.528 9.528 0 0 0-.228.876 4.152 4.152 0 0 0-.072.708c0 .224.024.412.072.564a.537.537 0 0 0 .24.312 1.24 1.24 0 0 1-.372.156c-.152.04-.288.06-.408.06-.432 0-.648-.296-.648-.888 0-.456.152-1.08.456-1.872-.16.368-.344.716-.552 1.044-.208.32-.42.604-.636.852a3.865 3.865 0 0 1-.66.612c-.216.152-.416.244-.6.276-.296-.016-.536-.156-.72-.42-.184-.272-.276-.616-.276-1.032 0-.448.096-.92.288-1.416.192-.496.436-.956.732-1.38.304-.424.632-.776.984-1.056.352-.288.692-.44 1.02-.456.08.024.168.072.264.144.104.072.2.156.288.252.096.096.176.196.24.3.064.096.1.18.108.252-.32.048-.652.204-.996.468a5.034 5.034 0 0 0-.924.96 5.609 5.609 0 0 0-.672 1.188c-.176.424-.264.82-.264 1.188 0 .152.056.248.168.288.232-.048.5-.244.804-.588.304-.352.672-.892 1.104-1.62l.264-.48a17.02 17.02 0 0 0 .612-1.128c.104-.2.2-.392.288-.576Zm1.485 4.644c0-.28.028-.608.084-.984.056-.384.136-.792.24-1.224.112-.432.24-.884.384-1.356.152-.472.32-.944.504-1.416.16-.424.344-.852.552-1.284a19.608 19.608 0 0 1 1.464-2.46c.272-.376.544-.72.816-1.032a2.467 2.467 0 0 1 .84.18c.144.048.272.108.384.18.12.072.216.144.288.216-.6.616-1.14 1.24-1.62 1.872a11.39 11.39 0 0 0-1.14 1.764c-.152.304-.292.588-.42.852-.12.264-.232.528-.336.792-.104.256-.2.516-.288.78-.08.256-.156.528-.228.816 1.536-1.96 2.676-2.94 3.42-2.94.208 0 .432.068.672.204.24.136.452.32.636.552-.248.272-.504.6-.768.984a16.54 16.54 0 0 0-.732 1.164c-.216.384-.396.744-.54 1.08-.136.328-.204.572-.204.732 0 .08.012.136.036.168.024.024.076.036.156.036a.72.72 0 0 0 .288-.048.535.535 0 0 1 .132-.048c.04.064.064.108.072.132a.197.197 0 0 1 .012.06c0 .032-.048.08-.144.144a4.516 4.516 0 0 1-.732.336.92.92 0 0 1-.288.072.463.463 0 0 1-.24-.072.718.718 0 0 1-.216-.168 1.193 1.193 0 0 1-.144-.24.801.801 0 0 1-.048-.276c0-.12.032-.296.096-.528.072-.24.168-.516.288-.828.12-.32.264-.668.432-1.044.168-.376.348-.76.54-1.152 0-.032-.016-.048-.048-.048-.024 0-.088.032-.192.096a8.247 8.247 0 0 0-.276.192c-.288.216-.58.484-.876.804-.288.312-.572.656-.852 1.032-.272.376-.532.776-.78 1.2-.24.416-.448.836-.624 1.26a.498.498 0 0 1-.108.156c-.048.048-.088.072-.12.072-.024 0-.06-.028-.108-.084a1.303 1.303 0 0 1-.12-.216 8.508 8.508 0 0 1-.096-.252.685.685 0 0 1-.048-.228Zm6.223-.6c0-.072.004-.16.012-.264a52.053 52.053 0 0 1 .192-1.092l.204-.924a4.885 4.885 0 0 1 .324-.936c.096-.2.208-.392.336-.576.136-.184.296-.32.48-.408.136.032.316.116.54.252.224.128.416.308.576.54a4.53 4.53 0 0 0-.468.624c-.12.208-.232.424-.336.648-.096.224-.188.456-.276.696-.08.24-.172.492-.276.756a8.885 8.885 0 0 0-.24.696 2.485 2.485 0 0 0-.12.612c0 .144-.004.244-.012.3 0 .064-.02.096-.06.096a.658.658 0 0 1-.192-.06c-.096-.04-.196-.1-.3-.18a1.55 1.55 0 0 1-.264-.324.843.843 0 0 1-.12-.456Zm2.292-5.208c0-.048.012-.12.036-.216a.534.534 0 0 1-.108-.18.76.76 0 0 1-.036-.216c0-.072.008-.168.024-.288.024-.128.052-.264.084-.408.032-.144.072-.292.12-.444.048-.16.096-.304.144-.432.096 0 .212.028.348.084.144.048.288.116.432.204.144.08.276.172.396.276.12.096.212.188.276.276-.088.088-.204.212-.348.372a6.44 6.44 0 0 0-.42.492c-.136.168-.26.328-.372.48-.112.152-.184.26-.216.324a.494.494 0 0 1-.252-.12c-.072-.072-.108-.14-.108-.204Zm3.148.408c.16 0 .344.048.552.144.208.096.392.22.552.372-.04-.32-.092-.62-.156-.9a5.045 5.045 0 0 0-.264-.888 8.075 8.075 0 0 0-.456-.996c-.192-.36-.432-.772-.72-1.236a.83.83 0 0 1 .156-.252 2.77 2.77 0 0 1 .624-.492c.12-.064.232-.104.336-.12.224.248.436.56.636.936.2.368.376.768.528 1.2a8 8 0 0 1 .348 1.32c.088.456.132.892.132 1.308 0 .416-.048.844-.144 1.284a7.51 7.51 0 0 1-.384 1.296c-.16.416-.348.812-.564 1.188a6.436 6.436 0 0 1-.708 1.008 3.822 3.822 0 0 1-.78.72 2.033 2.033 0 0 1-.816.36c-.552-.064-.976-.244-1.272-.54-.288-.288-.432-.688-.432-1.2 0-.272.04-.568.12-.888.088-.32.2-.636.336-.948a7.85 7.85 0 0 1 .492-.924c.192-.304.392-.576.6-.816a5.06 5.06 0 0 1 .648-.612c.216-.168.428-.276.636-.324Zm-1.224 5.772c.28-.096.56-.308.84-.636.28-.328.532-.712.756-1.152.224-.448.404-.924.54-1.428a5.447 5.447 0 0 0 .216-1.476v-.252a.395.395 0 0 0-.012-.096c-.192.08-.396.216-.612.408a6.538 6.538 0 0 0-.648.672c-.216.248-.42.52-.612.816a10.17 10.17 0 0 0-.516.888c-.152.296-.272.58-.36.852a2.38 2.38 0 0 0-.132.72c0 .4.18.628.54.684Z"
      />
      <path
        fill={fillTwo || fill}
        d="M40.45 10.456a.963.963 0 0 1-.409-.168.618.618 0 0 1-.264-.3c0-.096.012-.22.036-.372.032-.152.068-.304.108-.456.04-.16.08-.308.12-.444.04-.144.068-.252.084-.324.096 0 .216.024.36.072.152.048.304.116.456.204.16.08.308.176.444.288.144.104.252.212.324.324-.072.16-.164.312-.276.456a2.278 2.278 0 0 1-.36.372c-.12.112-.236.196-.348.252a.597.597 0 0 1-.276.096Zm5.174-6.06c.16 0 .344.048.552.144.208.096.392.22.552.372-.04-.32-.092-.62-.156-.9a5.045 5.045 0 0 0-.264-.888 8.075 8.075 0 0 0-.456-.996c-.192-.36-.432-.772-.72-1.236a.83.83 0 0 1 .156-.252 2.77 2.77 0 0 1 .624-.492c.12-.064.232-.104.336-.12.224.248.436.56.636.936.2.368.376.768.528 1.2a8 8 0 0 1 .348 1.32c.088.456.132.892.132 1.308 0 .416-.048.844-.144 1.284a7.51 7.51 0 0 1-.384 1.296c-.16.416-.348.812-.564 1.188a6.436 6.436 0 0 1-.708 1.008 3.822 3.822 0 0 1-.78.72 2.033 2.033 0 0 1-.816.36c-.552-.064-.976-.244-1.272-.54-.288-.288-.432-.688-.432-1.2 0-.272.04-.568.12-.888.088-.32.2-.636.336-.948a7.85 7.85 0 0 1 .492-.924c.192-.304.392-.576.6-.816a5.06 5.06 0 0 1 .648-.612c.216-.168.428-.276.636-.324ZM44.4 10.168c.28-.096.56-.308.84-.636.28-.328.532-.712.756-1.152.224-.448.404-.924.54-1.428a5.447 5.447 0 0 0 .216-1.476v-.252a.395.395 0 0 0-.012-.096c-.192.08-.396.216-.612.408a6.538 6.538 0 0 0-.648.672c-.216.248-.42.52-.612.816a10.17 10.17 0 0 0-.516.888c-.152.296-.272.58-.36.852a2.38 2.38 0 0 0-.132.72c0 .4.18.628.54.684Zm8.095-5.136c-.032.496-.12.924-.264 1.284a2.824 2.824 0 0 1-.624.936 4.447 4.447 0 0 1-.972.72c-.384.216-.832.424-1.344.624 0 .048-.004.1-.012.156v.156c0 .104.008.212.024.324.016.112.044.216.084.312a.65.65 0 0 0 .168.24.436.436 0 0 0 .276.084c.216 0 .428-.048.636-.144.208-.096.404-.212.588-.348.192-.144.368-.296.528-.456.168-.168.316-.32.444-.456.08.072.148.14.204.204-.36.48-.756.88-1.188 1.2-.424.312-.828.512-1.212.6-.552-.064-.984-.264-1.296-.6a1.803 1.803 0 0 1-.456-1.236c0-.328.044-.66.132-.996.096-.344.224-.672.384-.984.168-.32.36-.62.576-.9.224-.28.46-.524.708-.732.256-.208.516-.372.78-.492.272-.12.54-.18.804-.18.368.048.712.276 1.032.684Zm-.828.396c-.216.032-.44.12-.672.264a2.915 2.915 0 0 0-.66.576c-.2.24-.384.52-.552.84-.168.32-.3.664-.396 1.032a5.408 5.408 0 0 0 1.596-1.176c.424-.472.652-.984.684-1.536Zm1.962.324c0-.144.008-.28.024-.408a.79.79 0 0 1 .132-.324.587.587 0 0 1 .264-.216.998.998 0 0 1 .444-.084c.112 0 .236.012.372.036.144.024.248.068.312.132l-.084.36c-.016.104-.032.22-.048.348a37.935 37.935 0 0 0-.048 1.104 23.527 23.527 0 0 1-.084 1.464 5.938 5.938 0 0 1-.24 1.272c0 .032.012.048.036.048.12-.088.256-.216.408-.384.152-.168.312-.356.48-.564a16.9 16.9 0 0 0 .972-1.392c.192-.336.404-.756.636-1.26a9.92 9.92 0 0 0 .576-1.62c.048 0 .108.012.18.036.08.016.156.04.228.072a.98.98 0 0 1 .204.084c.064.032.108.06.132.084-.016.344-.1.696-.252 1.056-.144.36-.32.708-.528 1.044-.208.336-.428.652-.66.948-.232.296-.444.552-.636.768-.384.448-.772.848-1.164 1.2a8.953 8.953 0 0 1-1.38 1.02 1.23 1.23 0 0 1-.492-.324.59.59 0 0 1-.18-.408c0-.096.02-.204.06-.324.048-.128.1-.288.156-.48.056-.2.104-.448.144-.744.048-.296.072-.672.072-1.128 0-.264-.008-.528-.024-.792-.008-.272-.012-.48-.012-.624Z"
      />
    </svg>
  )
}
