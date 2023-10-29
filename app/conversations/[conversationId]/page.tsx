

interface IParams {
    conversationId: string;
}

const conversationId = async ({ params} : { params: IParams }) => {
    return ( 
        <div>
            conversation id
        </div>
     );
}
 
export default conversationId;