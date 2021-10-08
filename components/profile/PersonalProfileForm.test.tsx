import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { PersonalProfile } from './PersonalProfileForm';

const populateForm = () => {
  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: 'chris' },
  });
};

describe('PersonalProfile', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PersonalProfile />
      </Provider>
    );
  });

  test('no validation errors on initial render', async () => {
    expect(() => {
      screen.getByText(/this field is required/i);
    }).toThrow(/unable to find an element/i);
  });

  test('first name to be required', async () => {
    // populateForm();
    // expect(
    //   (screen.getByRole('textbox', { name: /first name/i }) as HTMLInputElement)
    //     .value
    // ).toBe('chris');

    // await act(async () => {
    //   fireEvent.submit(screen.getByRole('button'));
    // });

    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: '' },
    });

    await act(async () => {
      fireEvent.submit(screen.getByRole('button'));
    });

    expect(screen.getByText(/this field is required/i)).toBeInTheDocument();
  });
});
