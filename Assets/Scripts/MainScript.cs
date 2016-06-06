using UnityEngine;
using System.Collections;

public class MainScript : MonoBehaviour {

    static float timer = 1f;
    float timeLeft;

    // Use this for initialization
    void Start () {
        timeLeft = timer;
    }
	
	// Update is called once per frame
	void Update () {
        timeLeft -= Time.deltaTime;
        if (timeLeft < 0)
        {
            timeLeft = timer;

            foreach (Worker worker in Worker.getWorkers())
            {
                foreach (Project project in Project.getProjects())
                {
                    project.work(worker);
                }
            }
        }
    }
}
