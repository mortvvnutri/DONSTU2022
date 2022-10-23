import MaxHeightTextarea from "../ui/textarea/textarea"
import { Card } from "../ui/card1/card"
import { Card2 } from "../ui/card2/card"
import { Card3 } from "../ui/card3/card"
import { Card4 } from "../ui/card4/card"
import { Card5 } from "../ui/card5/card"


export const Home = () => {
    return (
        <div className="flex flex-col items-center gap-y-[30px]">
            <div className="flex gap-y-[30px] flex-col mt-[35px] mb-[35px] mx-[5px]">
            <Card/>
            <Card2/>
            <Card3/>
            <Card4/>
            <Card5/>
            </div>

            <MaxHeightTextarea/>


        </div>
    )
}