import styled, { keyframes } from 'styled-components'


export const Wrapper = styled.div`
  color: white; 
	
	a, u {
    text-decoration: none;
    color: white;
	}

	h1, h2, h3, h4, h5 {
		font-family: 'Montserrat', sans-serif;
		text-align: center;
		margin: 10px;
	}

	p {
		font-family: 'Lato', sans-serif;
		font-size: 20px;
		text-align: left;
		margin: 5px;
	}
`

export const CompanyName = styled.div`
	padding: 50px 5px;
`

export const LinkText = styled.p`
	padding: 15px 10px;
`

export const Sidebar = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	height: 100vh;
	width: 200px;
	background-color: #247f83;
`

export const MainContent = styled.div`
	margin-left: 200px;
`

export const Section = styled.div`
	height: 100vh;
	padding: 100px 50px;
`