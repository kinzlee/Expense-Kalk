import moment from'moment';

export default[{
    id: '1',
    description: 'laptop',
    messageNote: '',
    amount: 350000,
    createdAt: moment(0).add(5, 'days').valueOf()
},
{
    id: '2',
    description: 'phone',
    messageNote: '',
    amount: 45000,
    createdAt: 0
},
{
    id: '3',
    description: 'top',
    messageNote: '',
    amount: 45000,
    createdAt:moment(0).subtract(3, 'days').valueOf()
}];