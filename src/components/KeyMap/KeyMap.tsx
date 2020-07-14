import React from 'react'
import styled from 'styled-components'
import { useShortcuts } from '../../'
import { ShortcutConfig } from '../../types'
import { StyledUl, StyledListItem, StyledKeysDiv, StyledDescDiv } from './KeyMap.styles'

export interface KeyMapProps extends Partial<HTMLUListElement> {
    keyMapConfig: ShortcutConfig[]
}

export const KeyMap = ({ keyMapConfig }: KeyMapProps) => {

    const { keyState } = useShortcuts(keyMapConfig)
    
    return (
        <StyledUl>
            {keyMapConfig.map((shortcut: ShortcutConfig, index) => {

                return (
                    <StyledListItem key={index}>
                        <StyledKeysDiv>{shortcut.keys.reduce((acc: string, current: string): string => `${acc} ${current}`, '')}</StyledKeysDiv>
                        <StyledDescDiv>{shortcut.description}</StyledDescDiv>
                    </StyledListItem>
                )
            })}
        </StyledUl>
    )
}