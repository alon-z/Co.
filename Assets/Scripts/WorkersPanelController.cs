using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class WorkersPanelController : MonoBehaviour {

    public GameObject panel;
    public Object WorkerFrame;
    public float frameHight;
    

    // Use this for initialization
    void Start () {
        frameHight = (WorkerFrame as GameObject).GetComponent<RectTransform>().sizeDelta.y;
        for (int a = 0; a < 10; a++)
        {
            new Worker("No. " + (a + 1));
        }
        fillPanel();
        panel.GetComponent<RectTransform>().sizeDelta = new Vector2(panel.GetComponent<RectTransform>().sizeDelta.x, calcTotalHight());
    }
	
	void FixedUpdate () {
	    
	}

    GameObject createPanel(Worker worker, Vector3 position)
    {
        GameObject panel = Instantiate(WorkerFrame) as GameObject;
        RectTransform rect = panel.GetComponent<RectTransform>();
        rect.SetParent(this.panel.GetComponent<RectTransform>());
        rect.localScale = Vector3.one;
        rect.anchoredPosition = position;
        panel.GetComponentsInChildren<Text>()[0].text = worker.getName();
        return panel;
    }

    void fillPanel()
    {
        Vector3 vector = new Vector3(0f, -15f, 0f);
        foreach (Worker worker in Worker.getWorkers())
        {
            createPanel(worker, vector);
            vector.y -= frameHight + 5f;
        }
    }

    float calcTotalHight()
    {
        float hight = 5f;
        foreach (Worker worker in Worker.getWorkers())
        {
            hight += frameHight + 5f;
        }

        return hight;
    }
}
