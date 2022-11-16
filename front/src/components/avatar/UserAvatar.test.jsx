import renderer from 'react-test-renderer'
import UserAvatar from './UserAvatar'

describe('Renders avatar component', () => {
    it('snapshot test', () => {
        const mockUser = { avatarURL: "", username: "" }
        const tree = renderer.create(<UserAvatar user={mockUser} />).toJSON();
        expect(tree).toMatchSnapshot()
    })
})
