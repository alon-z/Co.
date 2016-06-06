﻿using UnityEngine;
using System.Collections;
using UnityEngine.SceneManagement;

public class MainUIController : MonoBehaviour {

    float timeLeft;

    public void changeScene(string Name)
    {
        SceneManager.LoadScene(Name);
    }

    void Start()
    {
        timeLeft = 10f;
    }

    void Update()
    {
        timeLeft -= Time.deltaTime;
        if (timeLeft < 0)
        {
            timeLeft = 10f;

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
