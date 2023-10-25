import React from 'react';
import { findAllByRole, render } from '@testing-library/react';
/**
 * @jest-environment jsdom
 */
import App from '../src/app';
import LoginForm from '../src/components/LoginForm';

// const jsdom = require('jsdom')
// const { JSDOM } = jsdom;
//does the login form render input fields?..
//test the buttons

describe('Unit testing React components', () => {

  describe('LoginForm', () => {
    const props = {
      username: 'Robert',
      password: 'stabrabbit',
      loggedIn: false
    }


    // beforeAll(() => {
    //   loginForm = render(<LoginForm />)
    // });


    // test('Contains a login button', async () => {
    //   render(<LoginForm {...props} />)
    //   const buttons = await findAllByRole('button');
    //   console.log(buttons);
    //   expect(buttons.length).toBe(1);
    // })

  })
})