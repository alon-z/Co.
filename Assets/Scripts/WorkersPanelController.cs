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
    }
	
	void FixedUpdate () {
        fillPanel();
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
        DeleteAllChilds(panel);

        Vector3 vector = new Vector3(0f, -15f, 0f);
        foreach (Worker worker in Worker.getWorkers())
        {
            createPanel(worker, vector);
            vector.y -= frameHight + 5f;
        }

        panel.GetComponent<RectTransform>().sizeDelta = new Vector2(panel.GetComponent<RectTransform>().sizeDelta.x, calcTotalHight());
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
}
