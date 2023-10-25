import React from 'react';
import { render } from '@testing-library/react';

import LoginForm from '../src/components/LoginForm';

//does the login form render input fields?..
//test the buttons

describe('Unit testing React components', () => {

  describe('LoginForm', () => {
    let loginForm;
    const props = {
      label: 'Username',
      value: '',
      username: 'Robert',
      password: 'stabrabbit',
      loggedIn: false
    };

    beforeAll(() => {
      loginForm = render(<LoginForm />)
    });

    test('Testing if login form renders input fields', () => {
        expect(text.getByText('Robert').toBeInDocument())
    })

  })
})