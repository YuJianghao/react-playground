import type { IAlertItem } from './components/AlertItem'

export const alerts: IAlertItem[] = [
  {
    type: 'Critical',
    error: 'Network Error',
    title: 'Shanghai Factory · Production Line 2',
    date: '5/1/2022 00:00:01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    type: 'Medium',
    error: 'Network Alert',
    title: 'Nickname of this group · Production Line A1',
    date: '5/1/2022 00:00:01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    type: 'Low',
    error: 'Network Update',
    title: 'Nickname of this group · Production Line A2',
    date: '5/1/2022 00:00:01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]
