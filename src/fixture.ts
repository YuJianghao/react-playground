export interface IAlertItem {
  id: string
  type: 'Critical' | 'Medium' | 'Low'
  error: string
  factory: string
  location: string
  date: string
  content: string
}
export const alerts: IAlertItem[] = [
  {
    id: '1',
    type: 'Critical',
    error: 'Network Error',
    factory: 'Shanghai Factory',
    location: 'Production Line 2',
    date: '5/1/2022 00:00:01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '2',
    type: 'Medium',
    error: 'Network Alert',
    factory: 'Nickname of this group',
    location: 'Production Line A1',
    date: '5/1/2022 00:00:01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: '3',
    type: 'Low',
    error: 'Network Update',
    factory: 'Nickname of this group',
    location: 'Production Line A2',
    date: '5/1/2022 00:00:01',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

export function getAlertById(id: string) {
  return alerts.find(item => item.id === id)!
}
