import PropTypes from "prop-types";

export default function ThemePicker({ themes, selectedId, onSelect }) {
  return (
    <select value={selectedId} onChange={(e) => onSelect(e.target.value)}>
      {themes.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
  );
}

ThemePicker.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })).isRequired,
  selectedId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
