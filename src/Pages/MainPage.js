import { SideBar } from '../components/SideBar/SideBar'
import { Panel } from '../components/Panel/Panel'
import { Wrapper } from '../utilites/Wrapper'

export const MainPage = () => {
	return (
		<>
			<Wrapper>
				<SideBar />
                <Panel />
			</Wrapper>
		</>
	)
}
