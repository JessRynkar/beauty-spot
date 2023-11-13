import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types.js'
import { CallToActionBlock } from '../../_blocks/CallToAction'
import { ContentBlock } from '../../_blocks/Content'
import { ContentMedia } from '../../_blocks/ContentMedia'
import { GoogleMaps } from '../../_blocks/GoogleMaps/index'
import { MediaBlock } from '../../_blocks/MediaBlock'
import ServicesList from '../../_blocks/ServicesList'
import { toKebabCase } from '../../_utilities/toKebabCase'
import { BackgroundColor } from '../BackgroundColor/index'
import { VerticalPadding, VerticalPaddingOptions } from '../VerticalPadding/index'

const blockComponents = {
  cta: CallToActionBlock,
  content: ContentBlock,
  contentMedia: ContentMedia,
  googleMaps: GoogleMaps,
  mediaBlock: MediaBlock,
  servicesList: ServicesList,
}

export const Blocks: React.FC<{
  blocks: Page['layout']
}> = props => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            let paddingTop: VerticalPaddingOptions = 'large'
            let paddingBottom: VerticalPaddingOptions = 'large'

            if (index === blocks.length - 1) {
              paddingBottom = 'large'
            }

            if (
              (blockType === 'servicesList' && block?.type === 'full') ||
              blockType === 'googleMaps' ||
              (blockType === 'mediaBlock' && block?.position === 'fullscreen')
            ) {
              paddingTop = 'none'
              paddingBottom = 'none'
            }

            if (Block) {
              return (
                <BackgroundColor key={index} index={index}>
                  <VerticalPadding top={paddingTop} bottom={paddingBottom}>
                    <Block
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      id={toKebabCase(blockName as string)}
                      {...block}
                    />
                  </VerticalPadding>
                </BackgroundColor>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
