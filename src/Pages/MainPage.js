import { SideBar } from '../components/SideBar/SideBar'
import { Form } from '../components/Form/Form'
import { Wrapper } from '../utilites/Wrapper'

export const MainPage = () => {
	return (
		<>
			<Wrapper>
				<SideBar />
                <Form />
			</Wrapper>
		</>
	)
}
