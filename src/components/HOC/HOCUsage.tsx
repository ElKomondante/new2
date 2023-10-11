import { Button,Cross, HOC,Nav,All,Favorite,Popular} from "./HOC"

const HOCUsage = () => {
    return (
        <>
            <HOC component={<Button></Button>} />
            <HOC component={<Cross></Cross>} />
        </>
    )
}
const NAVUsage = () => {
    return (
        <>
            <Nav component={<All></All>} />
            <Nav component={<Favorite></Favorite>} />
            <Nav component={<Popular></Popular>} />
        </>
    )
}


export { HOCUsage, NAVUsage}