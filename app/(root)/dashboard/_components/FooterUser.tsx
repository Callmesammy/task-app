
import { User } from "@supabase/supabase-js";

interface inProps{
    user: User
}
const FooterUser = async ({
    user
}: inProps) => {
   


    return <div>{user.email|| "No user found"}</div>;
};

export default FooterUser;
