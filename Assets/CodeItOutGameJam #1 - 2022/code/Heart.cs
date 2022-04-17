using UnityEngine;
using UnityEngine.UI;

public class Heart : MonoBehaviour
{
	[SerializeField] private GameObject _close;
	[SerializeField] private Image _image; 
	
	public void EnableClose(bool value)
	{
		_close.SetActive(value);

		var tempColor = _image.color;
		tempColor.a = value ? 0.5f : 1f;
		_image.color = tempColor;
	}
}