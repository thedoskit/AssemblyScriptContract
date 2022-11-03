import { storage, Context, logging} from "near-sdk-as";

export class Greeting{
    getGreeting(accountId: string): string | null{

        logging.log("Getting greeting for " + accountId);
        return storage.get<string>(accountId, "Greeting Not available")
    }
    setGreeting(greeting: string): void {

        logging.log("Setting greeting for " + Context.sender);
        logging.log("Setting greetng as " + greeting);
        storage.set(Context.sender, greeting);
    }
}