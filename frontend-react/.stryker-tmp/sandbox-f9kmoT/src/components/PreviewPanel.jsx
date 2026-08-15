// @ts-nocheck
import PropTypes from "prop-types";

export default function PreviewPanel({ tokens }) {
  return (
    <div style={{ background: tokens.color.primary, padding: tokens.spacing.lg }}>
      <p style={{ color: "#fff", fontFamily: tokens.typography.fontFamily }}>Preview</p>
    </div>
  );
}

PreviewPanel.propTypes = {
  tokens: PropTypes.shape({
    color: PropTypes.object,
    spacing: PropTypes.object,
    typography: PropTypes.object,
  }).isRequired,
};
