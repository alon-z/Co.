using System.Collections.Generic;

public class Worker {

    static List<Worker> workers = new List<Worker>();

    string name;

    List<Stat> stats;

    public Worker(string givenName)
    {
        this.name = givenName;
        if (givenName.CompareTo("") == 0)
        {
            this.name = "Empty";
        }
        this.stats = new List<Stat>();
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

    public void addStat(Stat stat)
    {
        stats.Add(stat);
    }

    public Stat searchStat(string name)
    {
        Stat found = null;
        foreach(Stat curr in stats)
        {
            if (curr.getName().CompareTo(name) == 0) { found = curr; }
        }

        return found;
    }

}
