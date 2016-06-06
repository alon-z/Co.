using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System.Collections.Generic;

public class ProjectsPanelController : MonoBehaviour {

    public GameObject panel;
    public Object ProjectFrame;
    public float frameHight;
    

    // Use this for initialization
    void Start () {
        frameHight = (ProjectFrame as GameObject).GetComponent<RectTransform>().sizeDelta.y;

        // BETA!!

        new Project("Test", new List<Stat>(new Stat[] { new Stat("Code", 10), new Stat("Sound", 5) }));
        Worker dude1 = new Worker("dude1");
        dude1.addStat(new Stat("Code", 1));
        Worker dude2 = new Worker("dude2");
        dude2.addStat(new Stat("Sound", 1));
        dude2.addStat(new Stat("Code", 1));
        Worker dude3 = new Worker("dude3");
        dude3.addStat(new Stat("Code", 1));
    }
	
	void Update () {
        fillPanel();
    }

    GameObject createPanel(Project project, Vector3 position)
    {
        GameObject panel = Instantiate(ProjectFrame) as GameObject;
        RectTransform rect = panel.GetComponent<RectTransform>();
        rect.SetParent(this.panel.GetComponent<RectTransform>());
        rect.localScale = Vector3.one;
        rect.anchoredPosition = position;
        panel.GetComponentsInChildren<Text>()[0].text = project.getName();
        panel.GetComponentsInChildren<Text>()[1].text = project.getPrecentage().ToString();
        if (project.getPrecentage() == 0)
        {
            panel.GetComponentsInChildren<Text>()[1].text = "Done";
        }
        return panel;
    }

    void fillPanel()
    {
        DeleteAllChilds(panel);

        Vector3 vector = new Vector3(0f, -15f, 0f);
        foreach (Project project in Project.getProjects())
        {
            createPanel(project, vector);
            vector.y -= frameHight + 5f;
        }

        panel.GetComponent<RectTransform>().sizeDelta = new Vector2(panel.GetComponent<RectTransform>().sizeDelta.x, calcTotalHight());
    }

    void DeleteAllChilds(GameObject pObj)
    {
        if (pObj != null)
        {
            for (int i = 0; i < pObj.transform.childCount; i++)
            {
                GameObject.Destroy(pObj.transform.GetChild(i).gameObject);
            }
        }
        else Debug.LogError("GameObject does not exist anymore!");
    }

    float calcTotalHight()
    {
        float hight = 5f;
        foreach (Project project in Project.getProjects())
        {
            hight += frameHight + 5f;
        }

        return hight;
    }
}
