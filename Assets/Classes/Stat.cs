using System;
using System.Collections.Generic;

public class Stat
{
    string name;
    int amount;

    List<string> validNames = new List<string>(new string[] { "Sound", "Code" });

    public Stat(string name, int amount)
    {
        if (checkValidStat(name))
        {
            this.name = name;
            this.amount = amount;
        } else
        {
            throw new Exception("Invalid stat name: " + name);
        }
    }

    public List<string> getValidStats()
    {
        return validNames;
    }

    public string getName() { return name; }

    public bool checkValidStat(string stat)
    {
        return validNames.Contains(stat);
    }

    public bool work(Worker worker)
    {
        Stat found = worker.searchStat(this.name);
        if (found != null)
        {
            this.amount -= found.amount;
        }

        if (this.amount < 0) { this.amount = 0; }

        return (this.amount == 0);
    }

    public int getAmount()
    {
        return amount;
    }
}
