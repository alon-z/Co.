using System.Collections.Generic;

public class Worker {

    string name;

    static List<Worker> workers = new List<Worker>();

    public Worker(string givenName)
    {
        this.name = givenName;
        if (givenName.CompareTo("") == 0)
        {
            this.name = "Empty";
        }
        workers.Add(this);
    }

    public string getName()
    {
        return this.name;
    }

    public static List<Worker> getWorkers()
    {
        return workers;
    }

    public void destroy()
    {
        workers.Remove(this);
    }

}
