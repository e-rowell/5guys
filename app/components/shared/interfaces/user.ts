/**
 * Interface for the user.
 * @author Ethan Rowell
 */
export interface IUser {

    /**
     * The username of the user.
     */
    username: string;

    /**
     * The patron's unique identifier.
     */
    patronID: number;

    /**
     * The type of user.
     */
    userType: string;
}
