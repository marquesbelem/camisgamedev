using TMPro;
using UnityEngine;

namespace BalloonGame
{
	public class Balloon : MonoBehaviour
	{
		[SerializeField] private BalloonData _data;
		[SerializeField] private SpriteRenderer _renderer;
		[SerializeField] private TMP_Text _textScore;
		public BalloonData Data => _data;

		public void Setup(BalloonData data)
		{
			_data = data;
			_renderer.sprite = _data.Sprite;
			_textScore.text = _data.Score.ToString();
		}

		private void OnDestroy()
		{

		}
	}
}
