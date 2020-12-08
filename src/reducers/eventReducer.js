const initState = {
    events: [
        {id:1,title:"Design Form Infographic", desc: "Lorem ipsum dolor",startDate:"2020-12-10",stopDate:"2020-12-16",people:'Frank',category:'Blog Infographic'},
        {id:2,title:'Nike Case Study', desc: "Lorem ipsum dolor",startDate:"2020-12-09",stopDate:"2020-12-13",people:'Keshav',category:'Nike Project'},
        {id:3,title:'Layout Design', desc: "Lorem ipsum dolor",startDate:"2020-12-16",stopDate:"2020-12-22",people:'Devu',category:'Envato Meetups'},
        {id:4,title:'hello title', desc: "Lorem ipsum dolor",startDate:"2020-10-01",stopDate:"2020-11-01",people:'Shivam',category:'Nike Project'},
        {id:5,title:'qwerty', desc: "Lorem ipsum dolor",startDate:"2020-12-05",stopDate:"2021-12-06",people:'Shivam',category:'Blog Infographic'},
    ]
}
const eventReducer= (state = initState,action)=>{
    
    if(action.type==='ADD_EVENT'){
        let events = {
                id:state.events.length,
                title:action.event.title,
                desc:action.event.desc,
                startDate:action.event.startDate,
                stopDate:action.event.stopDate,
                people:action.event.people,
                category:action.event.category
            };
            return{
                ...state,
                events:[...state.events,events]
            }
    }
    else{
        return state;
    }
}
export default eventReducer;