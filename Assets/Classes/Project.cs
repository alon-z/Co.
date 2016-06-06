using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

public class Project
{

    static List<Project> projects = new List<Project>();

    string name;
    List<Stat> stats;
    int startAmount;

    public Project(string givenName, List<Stat> stats)
    {
        this.name = givenName;
        if (givenName.CompareTo("") == 0)
        {
            this.name = "Empty";
        }
        this.stats = stats;
        this.startAmount = getTotalAmount();
        projects.Add(this);
    }

    public string getName()
    {
        return this.name;
    }

    public static List<Project> getProjects()
    {
        return projects;
    }

    public void destroy()
    {
        projects.Remove(this);
    }
    
    public bool work(Worker worker)
    {
        bool finished = true;
        foreach (Stat curr in stats)
        {
            finished = curr.work(worker);
        }

        return finished;
    }

    public int getTotalAmount()
    {
        int total = 0;
        foreach (Stat stat in stats)
        {
            total += stat.getAmount();
        }

        return total;
    }

    public int getPrecentage()
    {
        return (int)(((float)getTotalAmount() / (float)startAmount) * 100);
    }
}
