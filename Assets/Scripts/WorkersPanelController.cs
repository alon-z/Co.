using UnityEngine;
using System.Collections;

public class WorkersPanelController : MonoBehaviour {

    public GameObject panel;
    public Object WorkerFrame;

    // Use this for initialization
    void Start () {
        Worker test = new Worker("testingo");
        createPanel(test, new Vector3(0,100,1));
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
        return panel;
    }
}
