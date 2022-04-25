using DG.Tweening;
using System;
using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace BiribinhaMemoryGame
{
	public class Card : MonoBehaviour
	{
		[SerializeField]
		private Image _renderer;
		[SerializeField]
		private int _ID;
		[SerializeField]
		private RectTransform _rect;
		[SerializeField]
		private Image _hide;
		[SerializeField]
		private TMP_Text _textHide;
		[SerializeField]
		private Image _show;
		[SerializeField]
		private Button _button;
		[SerializeField] private RectTransform _board;

		[SerializeField]
		private bool _IsOpened = false;
		[SerializeField]
		private GameObject _particle;

		public Action<int> OnShow;
		public int ID => _ID;
		public bool IsOpened => _IsOpened;

		private RectTransform _rectShow;

		private void Awake()
		{
			_rectShow = _show.GetComponent<RectTransform>();
		}

		private void Start()
		{
			_hide.gameObject.SetActive(true);
			_show.gameObject.SetActive(false);
			_button.onClick.AddListener(() => OnClick());

			GameController.Instance.OnResetCard += Clean;
		}

		public void Setup(CardData data, Vector3 size, float fontSize)
		{
			_show.sprite = data.Sprite;

			_ID = data.GetHashCode();
			_rect.localScale = new Vector3(1, 1, 1);
			_rectShow.sizeDelta = size;
			_textHide.fontSize = fontSize;
		}

		private void OnClick()
		{
			OnShow?.Invoke(_ID);

			//Colocar efeito.
			OpenEffect(true);
			Blocked(true);
		}

		private void OpenEffect(bool show)
		{
			if (show)
			{
				transform.DORotate(new Vector3(0, 90, 0), 0.5f).OnComplete(() =>
				{
					transform.DORotate(Vector3.zero, 0.5f);

					_hide.gameObject.SetActive(false);
					_show.gameObject.SetActive(true);
				});
			}
			else
			{
				_show.gameObject.SetActive(false);
				_hide.gameObject.SetActive(true);
			}

			_particle.SetActive(show);
		}

		private void Blocked(bool value)
		{
			_button.interactable = !value;
		}

		private void Clean()
		{
			StartCoroutine(CoroutineEffect());
		}

		private IEnumerator CoroutineEffect()
		{
			yield return new WaitForSeconds(0.5f);
			OpenEffect(false);
			Blocked(false);
		}

		public void SetIsOpened(bool value)
		{
			_IsOpened = value;

			if (_IsOpened)
			{
				transform.DOScale(new Vector3(1.2f, 1.2f, 1.2f), 0.5f).OnComplete(() =>
				{
					transform.DOScale(new Vector3(1, 1, 1), 0.5f);
				});
			}
		}

		private void OnDestroy()
		{
			GameController.Instance.OnResetCard -= Clean;
		}
	}
}