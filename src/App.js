import React, { Component } from 'react';
import logo from './logo.svg';
import ScrollAnimation from 'react-animate-on-scroll'

import {
  Wrapper,
  Sidebar,
  MainContent,
  CompanyName,
  LinkText,
  Section
} from './components'

const sections = [
  {
    name: 'Section 1',
    key: 'section1',
    title: 'Section 1 Title',
    content: 'Section 1 content',
    backgroundColor: '#0f2b3e'
  },
  {
    name: 'Section 2',
    key: 'section2',
    title: 'Section 2 Title',
    content: 'Section 2 content',
    backgroundColor: '#10414f'
  },
  {
    name: 'Section 3',
    key: 'section3',
    title: 'Section 3 Title',
    content: 'Section 3 content',
    backgroundColor: '#179699'
  },
  {
    name: 'Section 4',
    key: 'section4',
    title: 'Section 4 Title',
    content: 'Section 4 content',
    backgroundColor: '#b8e1b7'
  }
]

class App extends Component {
  render() {
    const formattedLinks = sections.map((item) => (
      <a href={'#' + item.key}>
        <LinkText>{ item.name }</LinkText>
      </a>
    ))

    const formattedSections = sections.map((item) => (
      <Section 
        id={ item.key }
        style={{
          backgroundColor: item.backgroundColor
        }}
      >
        <ScrollAnimation animateIn="fadeIn">
          <h1>{ item.title }</h1>
          <p>{ item.content }</p>
        </ScrollAnimation>
      </Section>
    ))

    return (
      <div className="App">
        <Wrapper>
          <Sidebar>
            <CompanyName>
              <h2>Mav Farm</h2>
            </CompanyName>
            { formattedLinks }
          </Sidebar>
          <MainContent>
            { formattedSections }
          </MainContent>/
        </Wrapper>
      </div>
    );
  }
}

export default App;
