import React from 'react'
import { renderHook, cleanup, act } from '@testing-library/react-hooks'
import { fireEvent } from '@testing-library/dom'
import { useShortcuts, getKeycode} from './index'
import { ShortcutProvider } from '../../Provider/index'

describe('useShortcuts', () => {

    afterEach(cleanup)
    const wrapper = ({ children }: { children?: React.ReactNode }) => <div><ShortcutProvider>{children}</ShortcutProvider></div>

    // it('should accept a array config of keys and fn and call the events', async () => {
    //     const keyObj = {fn: jest.fn()}
    //     const spy = jest.spyOn(keyObj, 'fn')
    //     const { result, waitForNextUpdate } = renderHook(() => useShortcuts([{
    //         keys: ['Ctrl', 'J'],
    //         fn: keyObj.fn
    //     }]), { wrapper })

    //     act(() => {
    //         fireEvent.keyDown(document.body, { key: 'Ctrl', code: 'ControlLeft' })
    //         fireEvent.keyDown(document.body, { key: 'J', code: 'KeyJ' })
    //     })
    //     // await waitForNextUpdate()
    //     expect(result.current.keyState[0]['ControlLeft']).toEqual(true)
    //     expect(result.current.keyState[0]['KeyJ']).toEqual(true)
    //     expect(spy).toHaveBeenCalled()
    // })
    
    // it('should accept multiple keys config objects and call the events', () => {
    //     const keyObj ={ fn: jest.fn()}
    //     const spy = jest.spyOn(keyObj, 'fn')
    //     const { result } = renderHook(() => useShortcuts([{
    //         keys: ['Ctrl', 'J'],
    //         fn: keyObj.fn
    //     }, {
    //         keys: ['Shift', 'w'],
    //         fn: keyObj.fn
    //     }]), { wrapper })
            
    //     act(() => {
    //         fireEvent.keyDown(document.body, { key: 'Ctrl', code: 'ControlLeft' })
    //         fireEvent.keyDown(document.body, { key: 'J', code: 'KeyJ' })
    //         fireEvent.keyDown(document.body, { key: 'Shift', code: 'ShiftLeft' })
    //         fireEvent.keyDown(document.body, { key: 'W', code: 'KeyW' })
            
    //     })
    //     expect(result.current.keyState[0]['ControlLeft']).toEqual(true)
    //     expect(result.current.keyState[0]['KeyJ']).toEqual(true)
    //     expect(result.current.keyState[0]['ShiftLeft']).toEqual(true)
    //     expect(result.current.keyState[0]['KeyW']).toEqual(true)
    //     expect(spy).toHaveBeenCalled()
    // })
    it('should not call fn if only one button pressed', () => {
        const keyObj ={ fn: jest.fn()}
        const spy = jest.spyOn(keyObj, 'fn')
        const { result } = renderHook(() => useShortcuts([{
            keys: ['Ctrl', 'J'],
            fn: keyObj.fn
        }]), { wrapper })
        act(() => {
            fireEvent.keyDown(document.body, { key: 'Ctrl', code: 'ControlLeft' })
            
        })
        expect(result.current.keyState[0]['ControlLeft']).toEqual(true)
        expect(spy).not.toHaveBeenCalled()
    })
})

describe('getKeycode', () => {
    
    it('should return correct code for valid string keys', () => {
        expect(getKeycode('Ctrl')).toEqual('ControlLeft')
        expect(getKeycode('K')).toEqual('KeyK')
        expect(getKeycode('9')).toEqual('Digit9')
    })
})