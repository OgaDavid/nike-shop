import getBillboard from "@/actions/get-billboard";
import { Billboard } from "@/components/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {

    const billboard = await getBillboard('2069ea61-16ae-4556-b60c-dfdc0c1d0a04')
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
     );
}
 
export default HomePage;