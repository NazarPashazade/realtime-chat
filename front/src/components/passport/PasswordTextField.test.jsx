import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react';
import PasswordTextField from './PasswordTextField'

describe('render PasswordTextField component', () => {
    it('snapshot test', () => {
        const tree = renderer.create(<PasswordTextField registerFn={jest.fn()} name={""} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it('password  show or hide after clicking toggle button', () => {

        const icon = queryById("iconButton")
        fireEvent.click(icon)

        expect(icon).toBeTruthly()
    })
})