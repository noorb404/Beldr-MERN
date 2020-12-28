import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 4 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What is a Beldr?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Beldr is a website that helps you find JOB/HELP/GROW YOUR WORK it's a addvirtising sort of website for workers and job needs
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          What kind of help is there?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many Help you can get in here in the building jobs. elctrical , floors , walls anything you need!
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How do you get help?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
        <p>
          Simply search for the exact help you need in Find help page ,
           and visit his profile for more details about the guy. and for now thats what we provide to you ( information ) in the next month will be more developed tools to help!
          </p>
        </Accordion.Content>
      </Accordion>
    )
  }
}