export const validator = (name, value) => {
    //A function to validate each input values

    switch (name) {
        case 'name':
            if (value.length <= 9) {
                // we will set the error state
                return 'Name must be atleast 10 characters long!';
            }
            break;

        case 'email':
            if (
                !new RegExp(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                ).test(value)
            ) {
                return 'Enter a valid email address!';
            }
            break;

        case 'phone':
            if (value.length <= 6) return 'Phone number must be atleast 7 digits long!';
            break;

        default:
            break;
    }
};
