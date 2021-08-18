class Github{
    constructor(){
        this.clientId='2778f1065ed72eece03d';
        this.secretKey='278db2b75cff5472fdebcf35471b3ae7b940b7d1';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.secretKey}`);

        const profile = await profileResponse.json();

        return {
            profile
        };
    }
}

