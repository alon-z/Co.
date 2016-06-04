public class Worker {

    string name;

    public Worker(string givenName)
    {
        givenName = this.name;
        if (name.CompareTo("") == 0)
        {
            this.name = "Empty";
        }
    }

    public string getName()
    {
        return this.name;
    }

}
