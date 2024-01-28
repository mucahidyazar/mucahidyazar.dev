'use client'
export const revalidate = 10
import {DocumentDuplicateIcon, EyeIcon} from '@heroicons/react/24/outline'
import {useState} from 'react'

import {LinkPreviewCard} from '@/components/cards'
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import {env} from '@/configs/env.mjs'
import {useCreateUrlShortenerService} from '@/request/hooks/useCreateUrlShortenerService'
import {useLinkPreviewService} from '@/request/hooks/useLinkPreviewService'
import {useListUrlShortener} from '@/request/hooks/useListUrlShortener'

export default function LinkPreviewPage() {
  const [link, setLink] = useState(env.NEXT_PUBLIC_APP_URL)

  const {data: urlShortenerData, mutate: myUrlShortenerMutate} =
    useListUrlShortener() as any
  const {trigger: createTrigger} = useCreateUrlShortenerService()

  const createUrlShortenerHandler = () =>
    createTrigger({
      url: link,
    } as any).then(() => myUrlShortenerMutate())

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="h-10 w-full rounded-md border border-solid border-indigo-500 border-opacity-30 px-4"
          value={link}
          onChange={e => setLink(e.target.value)}
        />
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold uppercase"
          onClick={createUrlShortenerHandler}
        >
          Convert
        </button>
      </div>
      <ul className="flex h-60 w-full flex-col gap-1 overflow-y-auto rounded-md border border-solid border-indigo-500 border-opacity-30 bg-indigo-500 bg-opacity-10 p-1">
        {urlShortenerData?.data.map((data: any) => (
          <UrlShortenerListItem key={data._id} data={data} />
        ))}
      </ul>
    </div>
  )
}

function UrlShortenerListItem({data}: any) {
  const [hasCopied, setHasCopied] = useState(false)
  const [isPreviewing, setIsPreviewing] = useState(false)

  const {data: linkPreviewData} = useLinkPreviewService(data.full, {
    enabled: isPreviewing && !!data.full,
  }) as any

  return (
    <li className="rounded border-b border-solid border-indigo-200 border-opacity-20 bg-indigo-500 bg-opacity-20">
      <div className="flex flex-col gap-1 p-2">
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <DocumentDuplicateIcon
                  className="inline-block h-4 w-4 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${env.NEXT_PUBLIC_APP_URL}/s/${data.short}`,
                    )
                    setHasCopied(true)
                    setTimeout(() => setHasCopied(false), 1000)
                  }}
                />{' '}
              </TooltipTrigger>
              <TooltipContent>{hasCopied ? 'Copied' : 'Copy'}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <EyeIcon
                  className="inline-block h-4 w-4 cursor-pointer"
                  onMouseEnter={() => setIsPreviewing(true)}
                  onMouseLeave={() => setIsPreviewing(false)}
                />{' '}
              </TooltipTrigger>
              <TooltipContent>
                <LinkPreviewCard
                  title={linkPreviewData?.data?.title}
                  description={linkPreviewData?.data?.description}
                  image={linkPreviewData?.data?.image}
                  size="sm"
                />
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <a
            href={`${window.origin}/s/${data.short}`}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-500"
          >
            {`${window.origin}/s/${data.short}`}
          </a>
        </div>
        <div className="text-xs text-gray-400">
          <span className="inline-block w-10 font-semibold">Clicks</span>
          {data.clicks}
        </div>
        <div className="text-xs text-gray-400">
          <span className="inline-block w-10 font-semibold">Link</span>
          {data.full}
        </div>
        <div className="text-xs text-gray-400">
          <span className="inline-block w-10 font-semibold">Date</span>
          {new Date(data.createdAt).toLocaleTimeString('en', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          })}
        </div>
      </div>
    </li>
  )
}
