public class Worker {

    string name;

    public Worker(string givenName)
    {
        this.name = givenName;
        if (givenName.CompareTo("") == 0)
        {
            this.name = "Empty";
        }
    }

    public string getName()
    {
        return this.name;
    }

}
